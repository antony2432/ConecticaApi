export const queries = {
  getAllClients: 'SELECT * FROM CLIENTE',
  addNewClient: 'INSERT INTO CLIENTE (Dni, Nombre, Apellido, Celular, Usuario, Distrito, Direccion, Referencia, Correo, Tecnico,  Fecha_de_instalacion, Cintillo, [Plan], Servicio, Caja_nat, Router) VALUES (@dni, @nombre, @apellido, @celular, @usuario, @distrito, @direccion, @referencia, @correo, @tecnico,  @fecha_de_instalacion, @cintillo, @plan, @servicio, @caja_nat, @router)',
  getClientByDni: 'SELECT * FROM CLIENTE Where Dni = @dni',
  deleteClient: 'DELETE FROM [conecticaSac].[dbo].[CLIENTE] Where  Id = @id',
  getTotalClients: 'SELECT COUNT(*) FROM [conecticaSac].[dbo].[CLIENTE]',
  updateClientByDni: 'UPDATE CLIENTE SET Dni = @dni, Nombre = @nombre, Apellido = @apellido, Celular = @celular, Usuario = @usuario, Distrito = @distrito, Direccion = @direccion, Referencia = @referencia, Correo = @correo, Tecnico = @tecnico,  Fecha_de_instalacion = @fecha_de_instalacion, Cintillo = @cintillo, [Plan] = @Plan, Servicio = @servicio, Caja_nat = @caja_nat, Router = @router Where DNI = @dni2 '
}