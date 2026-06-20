<?php
// backend/config/app.php

return [
    'jwt_secret'       => getenv('JWT_SECRET') ?: 'CHANGE_THIS_SECRET_KEY_IN_PRODUCTION',
    'jwt_expiry'       => 60 * 60 * 8, // 8 hours
    'bcrypt_cost'      => 12,
    'app_env'          => getenv('APP_ENV') ?: 'development',
    'allowed_origins'  => explode(',', getenv('ALLOWED_ORIGINS') ?: 'http://localhost:4200'),
];
