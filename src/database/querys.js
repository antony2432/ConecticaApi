export const queries = {
  getAllClients: 'SELECT * FROM CLIENTE',
  addNewClient: 'INSERT INTO CLIENTE (Dni, Nombre, Apellido, Celular, Usuario, Distrito, Direccion, Referencia, Correo, Tecnico,  Fecha_de_instalacion, Cintillo, [Plan], Servicio, Caja_nap, [Sn], Router, [Comentario]) VALUES (@dni, @nombre, @apellido, @celular, @usuario, @distrito, @direccion, @referencia, @correo, @tecnico,  @fecha_de_instalacion, @cintillo, @plan, @servicio, @caja_nap, @sn, @router, @comentario)',
  getClientById: 'SELECT * FROM CLIENTE Where Id = @id',
  getClientByDistrito: 'SELECT * FROM CLIENTE Where Distrito = @distrito',
  deleteClient: 'DELETE FROM [conecticaSac].[dbo].[CLIENTE] Where  Id = @id',
  getTotalClients: 'SELECT COUNT(*) FROM [conecticaSac].[dbo].[CLIENTE]',
  updateClient: 'UPDATE CLIENTE SET Dni = @dni, Nombre = @nombre, Apellido = @apellido, Celular = @celular, Direccion = @direccion, Referencia = @referencia, Correo = @correo, Cintillo = @cintillo, [Plan] = @plan, Servicio = @servicio, Caja_nap = @caja_nap, [Sn] = @sn, Router = @router, [Comentario] = @comentario Where Id = @id ',
  getClientByDni: 'SELECT * FROM CLIENTE Where Dni = @dni',
  getTecnicoName: 'SELECT [Nombres], [Estado] FROM TECNICO',
  getRouter: 'SELECT [Id], [Marca], [Estado] FROM ROUTER',
  getServicio: 'SELECT [id], [estado], [servicio] FROM SERVICIOS',
  getPlanes: 'SELECT [id], [plan], [estado] FROM PLANES',
  getDistrito: 'SELECT [id], [nombre], [estado] FROM DISTRITOS',
  getUserWhereDis: 'SELECT [Usuario], [Dni] FROM CLIENTE Where Distrito = @distrito'
}