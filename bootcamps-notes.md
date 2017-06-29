Bootcamps Notes
--
Apuntes de clase para obtener un mejor aprendizaje con forme pasa el tiempo.
Buscando la mejora de los procesos de estudios en un 200%
___
Creación de una llave SSH
--
para la creación de una llave `SSH` podemos usar los siguientes comandos:

colocamos el siguiente comando en la consola

> $ssh-keygen

una vez generada nuestra clave privada y nuestra clave publica listamos los archivos dentro del directorio `.ssh`

**Nota:**
usamos `-a` para indicar que es un directorio oculto

> $ls -a ~/.ssh

ya estando verificado que existen archivos dentro de este directorio ingresamos a el mismo

>$cd .ssh

para copiar la información dentro de nuestra llave publica

>$cat id_rsa.pub
