<?php

namespace XndBogdan\BardTextColor;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class TextColor extends Mark
{
    public static $name = "textColor";

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        $attrKey = $mark->attrs->key ?? null;

        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'text-color',
                    'style' => $this->getTextColor($attrKey),
                ],
            ),
            0
        ];
    }

    private function getTextColor($color): string
    {
        if (!$color) {
            return '';
        }
        return "color: $color";
    }
}
