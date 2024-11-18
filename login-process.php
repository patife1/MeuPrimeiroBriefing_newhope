<?php
// Início do processamento
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os valores do formulário
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Simula validação de login (substitua por validação real no futuro)
    $valid_email = 'admin@newhope.com';
    $valid_password = '123456';

    if ($email === $valid_email && $password === $valid_password) {
        // Login bem-sucedido: redireciona para o dashboard
        header("Location: dashboard.html");
        exit();
    } else {
        // Login inválido: exibe mensagem de erro
        echo "<p>Login ou senha inválidos. <a href='login.html'>Tente novamente</a></p>";
    }
} else {
    // Caso o acesso não seja via POST
    echo "<p>Acesso inválido. <a href='login.html'>Voltar</a></p>";
}
?>

