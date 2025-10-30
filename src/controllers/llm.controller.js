import { InvokeLLM, GenerateImage } from '../services/llm.service.js';

export async function invokeLLM(req, res) {
  try {
    const result = await InvokeLLM(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function generateImage(req, res) {
  try {
    const result = await GenerateImage(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
