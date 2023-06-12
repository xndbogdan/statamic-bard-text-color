<?php
namespace XndBogdan\BardTextColor;

use Statamic\Statamic;
use Illuminate\Support\Facades\View;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/textcolor.js',
    ];

    public function register()
    {
        $this->app->bind(\Statamic\Fieldtypes\Bard::class, Bard::class);
    }

    public function boot() {
        parent::boot();

        $this->publishes([
            __DIR__.'/../config/bard-custom-colors.php' => config_path('bard-custom-colors.php'),
        ], 'bard-custom-colors');

        Augmentor::addExtension('text-color', new TextColor());
        Statamic::provideToScript([
            'bard-custom-colors' => config('bard-custom-colors.custom_colors', config('bard-custom-colors')),
            'bard-default-colors' => config('bard-custom-colors.default_colors'),
        ]);
    }
}
