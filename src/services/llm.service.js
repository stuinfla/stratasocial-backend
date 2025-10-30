import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Invoke LLM with prompt and optional JSON schema
 * @param {Object} params
 * @param {string} params.prompt - The prompt to send to the LLM
 * @param {Object} params.response_json_schema - Optional JSON schema for structured output
 * @param {boolean} params.add_context_from_internet - Optional flag for web search (not implemented yet)
 * @returns {Promise<Object>} LLM response
 */
export async function InvokeLLM({ prompt, response_json_schema, add_context_from_internet = false }) {
  try {
    const messages = [
      {
        role: 'user',
        content: prompt
      }
    ];

    let completionParams = {
      model: 'gpt-4-turbo-preview',
      messages,
      temperature: 0.7,
      max_tokens: 4000
    };

    // If JSON schema is provided, use structured output
    if (response_json_schema) {
      completionParams.response_format = { type: 'json_object' };

      // Add schema instruction to prompt
      messages[0].content = `${prompt}\n\nRespond with valid JSON matching this schema: ${JSON.stringify(response_json_schema)}`;
    }

    const completion = await openai.chat.completions.create(completionParams);

    const content = completion.choices[0].message.content;

    // If JSON schema was requested, parse the response
    if (response_json_schema) {
      try {
        return JSON.parse(content);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', content);
        throw new Error('LLM returned invalid JSON');
      }
    }

    return content;
  } catch (error) {
    console.error('LLM Service Error:', error);
    throw new Error(`LLM invocation failed: ${error.message}`);
  }
}

/**
 * Generate image using DALL-E
 * @param {Object} params
 * @param {string} params.prompt - The image generation prompt
 * @returns {Promise<Object>} Image URL
 */
export async function GenerateImage({ prompt }) {
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard'
    });

    return {
      url: response.data[0].url
    };
  } catch (error) {
    console.error('Image Generation Error:', error);
    throw new Error(`Image generation failed: ${error.message}`);
  }
}

export default {
  InvokeLLM,
  GenerateImage
};
