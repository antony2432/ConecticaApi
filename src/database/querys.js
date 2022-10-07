export const queries = {
  getAllClients: 'SELECT * FROM CLIENTE',
  addNewClient: 'INSERT INTO CLIENTE (Dni, Nombre, Apellido, Celular, Usuario, Distrito, Direccion, Referencia, Correo, Tecnico,  Fecha_de_instalacion, Cintillo, [Plan], Servicio, Caja_nap, [Sn], Router) VALUES (@dni, @nombre, @apellido, @celular, @usuario, @distrito, @direccion, @referencia, @correo, @tecnico,  @fecha_de_instalacion, @cintillo, @plan, @servicio, @caja_nap, @sn, @router)',
  getClientById: 'SELECT * FROM CLIENTE Where Id = @id',
  deleteClient: 'DELETE FROM [conecticaSac].[dbo].[CLIENTE] Where  Id = @id',
  getTotalClients: 'SELECT COUNT(*) FROM [conecticaSac].[dbo].[CLIENTE]',
  updateClient: 'UPDATE CLIENTE SET Dni = @dni, Nombre = @nombre, Apellido = @apellido, Celular = @celular, Direccion = @direccion, Referencia = @referencia, Correo = @correo, Cintillo = @cintillo, [Plan] = @plan, Servicio = @servicio, Caja_nap = @caja_nap, [Sn] = @sn, Router = @router Where Id = @id '
}