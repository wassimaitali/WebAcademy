<!-- resources/views/login.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif
    <form action="{{ route('login') }}" method="post">
        @csrf
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br>

        <label for="password">Mot de passe:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit">Se connecter</button>
    </form>
</body>
</html>
