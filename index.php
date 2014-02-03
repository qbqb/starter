<?

require 'vendor/autoload.php';

$views_path = 'develop/pages';

$loader = new Twig_Loader_Filesystem($views_path);

$twig = new Twig_Environment($loader, array(
//    'cache' => './cache',
));


$template = 'index';

if(array_key_exists('REDIRECT_URL', $_SERVER)){
    $template = trim($_SERVER['REDIRECT_URL'], '/');
}

if(preg_match('/(.*)\.(html|php)$/i', $template, $matches)){
    $template = $matches[1];
}

$templates = array(
    'twig' => array(
        $template . '.html.twig',
    ),
    'php' => array(
        $template . '.php',
    )    
);

$template = str_replace('/', '_', $template);

$templates['twig'][] = $template . '.html.twig';
$templates['php'][] = $template . '.php';

$templates_path = $_SERVER['DOCUMENT_ROOT'] . '/' . $views_path . '/';

foreach ($templates as $type => $type_templates) {
    foreach ($type_templates as $template){
        if($type == 'twig' && file_exists($templates_path . $template)){
            $twig->display('/' . $template );
            exit;
        }else if($type == 'php' && file_exists($templates_path . $template)){
            include $templates_path . $template;
            exit;
        }
    }
}

http_response_code(404);
echo 'Not found: ', $template;