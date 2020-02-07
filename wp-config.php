<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */
define('FS_METHOD', 'direct');

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'ppestruturasmetalicas' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=%yju}gPAm4Y[*ytnY`;Yx^ #ZCFoRSiJ%S@4]f;SlDZ5fkR{>M(kAVH9L060*J.' );
define( 'SECURE_AUTH_KEY',  '^!c%!2V@5tVs!8XyH7HPl92.T1a@SNxt~g(-?*Yp@(}gr*m9N8-kgCnMohh?GV9R' );
define( 'LOGGED_IN_KEY',    '@wfDLG,tA&.@wBuCjWVRSevUc6i*`L8(V*PXmCz-9(U@k`pr>E)D:^+gi4ZLuDCA' );
define( 'NONCE_KEY',        'MbVdhw8]czBVbTh_JN=NAmWsbpR/9nUHP(j>0gMpey)SgXwMYnhND3tCEAqbe%?P' );
define( 'AUTH_SALT',        'IrobOzi:El8$6E=<ZX l~%3(=f LiI46ISf)e0A(JD=u1(^Qku2wz7Wc(o,A}trQ' );
define( 'SECURE_AUTH_SALT', 'Od)W(QI{V<$Z>uMmA{tf`cEgY,(jsU)(9|Xnu -XES7RfGGi9?3>Yhb7;?WfvV9(' );
define( 'LOGGED_IN_SALT',   'O#pJ;.rlM{Wlc:=kQr@@.H#I7ZB7P$R?*)0qj-TiX-N*L+dB9xr_!<45(SH2mvq0' );
define( 'NONCE_SALT',       '%@W$rFb8e3%=GxL=5fom=Y ;-[%?0tr)_gy}2.Qp@)2_M7-64mA[K*LSj>qiN<U1' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
