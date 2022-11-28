export const queries = {
  getAllClients: 'SELECT * FROM CLIENTE',
  addNewClient: 'INSERT INTO CLIENTE (dni, nombre, apellido, celular, usuario, distrito, direccion, referencia, correo, tecnico,  fecha_de_instalacion, cintillo, [plan], servicio, cajaNap, [sn], router, [comentario]) VALUES (@dni, @nombre, @apellido, @celular, @usuario, @distrito, @direccion, @referencia, @correo, @tecnico,  @fecha_de_instalacion, @cintillo, @plan, @servicio, @cajaNap, @sn, @router, @comentario)',
  getClientById: 'SELECT * FROM CLIENTE Where id = @id',
  getClientByDistrito: 'SELECT * FROM CLIENTE Where distrito = @distrito',
  deleteClient: 'DELETE FROM [conecticaSac].[dbo].[CLIENTE] Where  id = @id',
  getTotalClients: 'SELECT COUNT(*) FROM [conecticaSac].[dbo].[CLIENTE]',
  updateClient: 'UPDATE CLIENTE SET dni = @dni, nombre = @nombre, apellido = @apellido, celular = @celular, direccion = @direccion, referencia = @referencia, correo = @correo, cintillo = @cintillo, [plan] = @plan, servicio = @servicio, cajaNap = @cajaNap, [sn] = @sn, router = @router, [comentario] = @comentario Where id = @id ',
  getClientByDni: 'SELECT * FROM CLIENTE Where dni = @dni',
  getTecnicoName: 'SELECT [nombres], [estado] FROM TECNICO',
  getRouter: 'SELECT [id], [marca], [estado] FROM ROUTER',
  getServicio: 'SELECT [id], [estado], [servicio] FROM SERVICIOS',
  getPlanes: 'SELECT [id], [plan], [estado] FROM PLANES',
  getDistrito: 'SELECT [id], [nombre], [estado] FROM DISTRITOS',
  getUserWhereDis: 'SELECT [usuario], [dni] FROM CLIENTE Where distrito = @distrito'
}