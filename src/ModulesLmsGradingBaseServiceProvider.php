<?php

namespace Modullo\ModulesLmsGradingBase;
use Illuminate\Support\ServiceProvider;

class ModulesLmsGradingBaseServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'modules-lms-grading-base');

        $this->publishes([
            __DIR__.'/resources/assets' => public_path('vendor/GradingBaseAssets'),
        ], 'grading-assets');

        $this->publishes([
            __DIR__.'/config/navigation-settings.php' => config_path('navigation-menu.php')
        ],'menu-config');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/config/navigation-settings.php', 'navigation-menu'
        );
    }
}
