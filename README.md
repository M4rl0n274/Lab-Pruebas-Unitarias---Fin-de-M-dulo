Laboratorio

# Instructions

A **Web API** allows our applications to communicate - **request** resources and **receive** responses - over the internet. 

**For your end of module assessment, you will be writing your own methods for interacting with a Web API.**

This Web API will serve a **JSON** database containing a list of **users**. Each user will have an associated **id** number, a **First Name**, a **Last Name**, and an **email** address. You will **teach yourself** how to interact with an **npm** module named `json-server`.


## Tasks

1. Create and export a method to **return** the **URL** of the server from the SD-12-1: AssessmentServer-Individual project.
    * The `getServerURL()` method should **return** the URL of your running JSON server.

2. Create and export a method to **print** a list of **users** from the JSON server.
    * The `listUsers()` method should simply print the **entire** JSON response, containing the list of **users**, to the console.

3. Create and export a method to **add** a new user to the JSON server.
    * The `addUser()` method should:
      * Take **3** inputs as follows: `addUser(<first_name>, <last_name>, <email>)`
      * Result in a complete new user being added to the JSON server with a **new, sequential, unique id number**.
        * For example: if the highest id number in the existing list is `4`, then this new id number should be `5`.

4. Create and export a method to **delete** a user from the JSON server.
    * The `delUser()` method should:
      * Take an **id** number as input as follows: `delUser(<id>)`
      * Result in the user matching that **id** number being deleted from the JSON server.


    # Instrucciones

Una **API web** permite que nuestras aplicaciones se comuniquen (**soliciten** recursos y **reciban** respuestas) a través de Internet. 

**Para la evaluación de fin de módulo, escribirá sus propios métodos para interactuar con una API web.**

Esta API web servirá una base de datos **JSON** que contiene una lista de **usuarios**. Cada usuario tendrá un número de **id** asociado, un **nombre**, un **apellido** y una dirección de **correo electrónico**. **Aprenderá por sí mismo** cómo interactuar con un módulo **npm** llamado `json-server`.

## Tareas

1. Cree y exporte un método para **devolver** la **URL** del servidor desde el proyecto SD-12-1: AssessmentServer-Individual.
* El método `getServerURL()` debe **devolver** la URL de su servidor JSON en ejecución.

2. Cree y exporte un método para **imprimir** una lista de **usuarios** desde el servidor JSON.
* El método `listUsers()` debería simplemente imprimir la respuesta JSON **completa**, que contiene la lista de **usuarios**, en la consola.

3. Crear y exportar un método para **agregar** un nuevo usuario al servidor JSON.
* El método `addUser()` debería:
* Tomar **3** entradas de la siguiente manera: `addUser(<first_name>, <last_name>, <email>)`
* Generar que se agregue un nuevo usuario completo al servidor JSON con un **nuevo número de identificación secuencial y único**.
* Por ejemplo: si el número de identificación más alto en la lista existente es `4`, entonces este nuevo número de identificación debería ser `5`.

4. Crear y exportar un método para **eliminar** un usuario del servidor JSON.
* El método `delUser()` debe:
* Tomar un número de **id** como entrada de la siguiente manera: `delUser(<id>)`
* Hacer que el usuario que coincida con ese número de **id** sea eliminado del servidor JSON.


