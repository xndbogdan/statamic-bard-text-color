<?php

namespace XndBogdan\BardTextColor;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/textcolor.js',
    ];

    public function boot() {
        parent::boot();
        Augmentor::addMark(TextColor::class);
    }
}
