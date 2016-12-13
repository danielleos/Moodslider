<html>
<head>
<title>Process Upload</title>
</head>
<body>
<?php
move_uploaded_file ($_FILES['uploadFile'] ['tmp_name'], 
       "../uploads/{$_FILES['uploadFile'] ['name']}")
?>
</body>
</html>
