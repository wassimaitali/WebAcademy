<!-- resources/views/signup.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <h1>Inscription</h1>
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
    <form action="{{ route('register') }}" method="post">
        @csrf
        <label for="firstname">Prénom:</label>
        <input type="text" name="firstname" id="firstname" required><br>

        <label for="lastname">Nom:</label>
        <input type="text" name="lastname" id="lastname" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br>

        <label for="password">Mot de passe:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit">S'inscrire</button>
    </form>
</body>
</html>
