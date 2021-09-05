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

    public function boot() {
        parent::boot();

        $this->publishes([
            __DIR__.'/../config/bard-custom-colors.php' => config_path('bard-custom-colors.php'),
        ], 'bard-custom-colors');

        Augmentor::addMark(TextColor::class);
        Statamic::provideToScript([
            'bard-custom-colors' => config('bard-custom-colors'),
        ]);
    }
}
