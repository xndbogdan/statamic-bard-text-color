<?php

namespace XndBogdan\BardTextColor;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class TextColor extends Mark
{
    public static $name = "textColor";

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'text-color',
                    'style' => $this->getTextColor($mark->attrs->key),
                ],
            ),
            0
        ];
    }

    private function getTextColor($color): string
    {
        return "color: $color";
    }
}
