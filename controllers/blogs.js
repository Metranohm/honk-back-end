import { Profile } from "../models/profile.js"
import { Blog } from "../models/blog.js"

const create = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export {
  create,
}