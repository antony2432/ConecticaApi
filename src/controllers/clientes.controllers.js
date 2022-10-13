import { getConnection, sql, queries } from "../database";

export const getClientes = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllClients);
    res.json(result.recordset);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
export const createNewClient = async (req, res) => {
  try {
    const { dni, nombre, apellido, celular, usuario, distrito, direccion, tecnico, fecha_de_instalacion, plan, servicio, sn, router, comentario } = req.body
    let {referencia, cintillo, caja_nap, correo} = req.body
    if (dni == null || nombre == null || apellido == null || celular == null || usuario == null || distrito == null || direccion == null || tecnico == null || fecha_de_instalacion == null || plan == null || servicio == null || sn == null || router == null) {
      return res.status(400).json({ msg: 'Por favor envía los datos completos' });
    }
    if(referencia == "null")  referencia = null
    if(cintillo == "null")  cintillo = null
    if(caja_nap == "null")  caja_nap = null
    if(correo == "null")  correo = null
    const pool = await getConnection()
    await pool
      .request()
      .input("dni", sql.Int, dni)
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("celular", sql.Int, celular)
      .input("usuario", sql.VarChar, usuario)
      .input("distrito", sql.VarChar, distrito)
      .input('direccion', sql.VarChar, direccion)
      .input("referencia", sql.VarChar, referencia)
      .input("correo", sql.VarChar, correo)
      .input("tecnico", sql.VarChar, tecnico)
      .input("fecha_de_instalacion", sql.Date, fecha_de_instalacion)
      .input("cintillo", sql.Int, cintillo)
      .input("plan", sql.VarChar, plan)
      .input("servicio", sql.VarChar, servicio)
      .input("caja_nap", sql.VarChar, caja_nap)
      .input("sn", sql.VarChar, sn)
      .input("router", sql.VarChar, router)
      .input('comentario', sql.VarChar, comentario)
      .query(queries.addNewClient)
    res.json('Enviado');
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}
export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection()
    const resulti = await pool
      .request()
      .input('id', id)
      .query(queries.getClientById)
    res.send(resulti.recordset[0])
  } catch (error) {
    console.log(error)
  }
}

export const getClientByDni = async (req,res) => {
  try {
    const {dni} = req.params;
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('dni', dni)
      .query(queries.getClientByDni)
      res.send(result.recordset)
  } catch (error) {
    console.log(error)
  }
}

export const deleteClientById = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await getConnection()
    const result = await pool
      .request()
      .input('id', id)
      .query(queries.deleteClient)
    res.json('Eliminado')
  } catch (error) {
    console.log(error)
  }
}

export const getTotalClients = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool
      .request()
      .query(queries.getTotalClients)
    res.json(result.recordset[0]['']);
  } catch (error) {
    console.log(error)
  }
}

export const UpdateClientById = async (req, res) => {
  try {
    const { dni, nombre, apellido, celular, direccion, referencia, correo, cintillo, plan, servicio, caja_nap, sn, router, comentario } = req.body
    let { id } = req.params;
    if (dni == null || nombre == null || apellido == null || celular == null || direccion == null || referencia == null || correo == null || cintillo == null || plan == null || servicio == null || caja_nap == null || sn == null || router == null) {
      return res.status(400).json({ msg: 'Por favor envía los datos completos' });
    }
    const pool = await getConnection()
    await pool
      .request()
      .input("dni", sql.Int, dni)
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("celular", sql.Int, celular)
      .input('direccion', sql.VarChar, direccion)
      .input("referencia", sql.VarChar, referencia)
      .input("correo", sql.VarChar, correo)
      .input("cintillo", sql.Int, cintillo)
      .input("plan", sql.VarChar, plan)
      .input("servicio", sql.VarChar, servicio)
      .input("caja_nap", sql.VarChar, caja_nap)
      .input("sn", sql.VarChar, sn)
      .input("router", sql.VarChar, router)
      .input("comentario", sql.VarChar, comentario)
      .input("id", sql.Int, id)
      .query(queries.updateClient)
    res.json('Actualizado');
  } catch (error) {
    console.log(error)
  }
}

export const getTecnicoName = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getTecnicoName);
    res.json(result.recordset);
  } catch (error) {
    console.log(error)
  }
}

export const getRouter = async (req, res)=> {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getRouter)
    res.json(result.recordset)
  } catch (error) {
    console.log(error)
  }
}