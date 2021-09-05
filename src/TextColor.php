<?php

namespace XndBogdan\BardTextColor;

use ProseMirrorToHtml\Marks\Mark;

class TextColor extends Mark
{
    protected $markType = 'textColor';
    protected $tagName = 'span';

    public function matching(): bool {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array {
        return [
            [
                'tag' => 'span',
                'attrs' => [
                    'style' => "color:{$this->mark->attrs->color}!important;",
                ],
            ],
        ];
    }
}
