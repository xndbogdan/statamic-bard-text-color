<?php

namespace XndBogdan\BardTextColor;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class TextColor extends Mark
{
    public static $name = "textColor";

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        $color = $mark->attrs->color ?? $mark->attrs->key ?? null;

        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'text-color',
                    'style' => $color ? "color: {$color}" : '',
                ],
            ),
            0
        ];
    }
}
