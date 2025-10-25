import { pool } from '../database.js';

export const getusers = async (_, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    return res.status(200).json(rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



export const adduser = async (req, res) => {
  try {
    const q = "INSERT INTO usuarios (nome, email, fone, data_nasc) VALUES ($1, $2, $3, $4)";
    const values = {
    nome: req.body.nome,
    email: req.body.email,
    fone: req.body.fone,
    data_nasc: req.body.data_nasc
    };
    await pool.query(q, [values.nome, values.email, values.fone, values.data_nasc]);
    return res.status(201).json("Usuário adicionado com sucesso!");
  }catch(err){
    return res.status(500).json({ error: err.message });
  }
;};



export const updateuser = async (req, res) => {
  try {
    const q = "UPDATE usuarios SET nome = $1, email = $2, fone = $3, data_nasc = $4 WHERE id = $5";
    const values = {
      nome: req.body.nome,
      email: req.body.email,
      fone: req.body.fone,
      data_nasc: req.body.data_nasc
    };
    await pool.query(q, [values.nome, values.email, values.fone, values.data_nasc, req.params.id]);
    return res.status(200).json("Usuário atualizado com sucesso!");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



export const deleteuser = async (req, res) =>{
  try{
    const q = "DELETE FROM usuarios WHERE id = $1";
    await pool.query(q, [req.params.id]);
    return res.status(200).json("Usuário deletado com sucesso!");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
