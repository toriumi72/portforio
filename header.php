<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php the_title(); ?></title>
    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap" rel="stylesheet">
    <!-- swiper -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <script defer src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <!-- vivus -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"></script>
    <!-- scripts -->
    <script defer src="<?php echo get_stylesheet_directory_uri(); ?>/scripts/swiper.js"></script>
    <script defer src="<?php echo get_stylesheet_directory_uri(); ?>/scripts/vivus.js"></script>
    <script defer src="<?php echo get_stylesheet_directory_uri(); ?>/scripts/main.js"></script>
    <!-- css -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/styles/destyle.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/styles/default.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/styles/vivus.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/styles/observer.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/styles/style.css">  

    <?php wp_head(); ?>
</head>
<body>
    <div id="wrapper">
        <div id="loading">
            <div id="loadingWrap"></div>
        </div>
        <div id="js_scroll_fadein" class="js_scroll_fadein arrow"></div>
        <header class="ly_header js_header">
            <div class="ly_header_inner">
                <h1 class="bl_header_logo js_header target up"><a href=""><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logoW.png" alt="肉球のロゴ"></a></h1>
                <h1 class="bl_header_logo-2 js_header"><a href=""><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logoB.png" alt="肉球のロゴ"></a></h1>
                <nav class="bl_nav hp_nav_header">
                    <ul class="bl_nav_menu hp_animation">
                        <li class="bl_nav_menu_li js_header target up"><a href="#works" alt="">works</a></li>
                        <li class="bl_nav_menu_li js_header target up"><a href="#about" alt="">about</a></li>
                        <li class="bl_nav_menu_li js_header target up"><a href="#service" alt="">service</a></li>
                        <li class="bl_nav_menu_li js_header target up"><a href="#price" alt="">price</a></li>
                        <li class="bl_nav_menu_li js_header target up"><a href="#contact" alt="">contact</a></li>
                    </ul>
                </nav>
                <!-- ハンバーガーメニュー -->
                <button  class="bl_hamburger_button bl_hamburger_button js_header target up">
                    <span class="color_w"></span>
                    <span class="color_w"></span>
                    <span class="color_w"></span>
                </button>
                
            </div>
            <div class="bl_hamburger_bg-w"></div>
            <div class="bl_hamburger_menu">
                <ul class="hp_animation">
                    <h1 class="bl_hamburger_menu_li-logo js_header"><a href=""><img src="<?php echo get_stylesheet_directory_uri(); ?>//images/logoB.png" alt="肉球のロゴ"></a></h1>
                    <li class="bl_hamburger_menu_li hp_font"><a href="#works">works</a></li>
                    <li class="bl_hamburger_menu_li hp_font"><a href="#about">about</a></li>
                    <li class="bl_hamburger_menu_li hp_font"><a href="#service">service</a></li>
                    <li class="bl_hamburger_menu_li hp_font"><a href="#price">price</a></li>
                    <li class="bl_hamburger_menu_li hp_font"><a href="#contact">contact</a></li>
                </ul>
            </div>
        </header>