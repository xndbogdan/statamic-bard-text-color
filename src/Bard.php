<?php

namespace XndBogdan\BardTextColor;

class Bard extends \Statamic\Fieldtypes\Bard
{
    protected function convertLegacyTiptap($value)
    {
        return parent::convertLegacyTiptap($this->convertLegacyTextColor($value));
    }

    protected function convertLegacyTextColor($value)
    {
        if (! is_array($value) || ! array_key_exists('content', $value)) {
            return $value;
        }

        foreach (($value['content'] ?? []) as $i => $node) {
            if (! isset($node['marks'])) {
                continue;
            }

            foreach ($node['marks'] as $j => $mark) {
                if (! $mark['type'] === 'textColor' || ! isset($mark['attrs']) || ! array_key_exists('key', $mark['attrs'])) {
                    continue;
                }

                if (! isset($mark['attrs']['color'])) {
                    $value['content'][$i]['marks'][$j]['attrs']['color'] = $mark['attrs']['key'];
                }

                unset($value['content'][$i]['marks'][$j]['attrs']['key']);
            }
        }

        return $value;
    }
}
