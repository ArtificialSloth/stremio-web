// Copyright (C) 2017-2024 Smart code 203358507

import React, { useCallback, useMemo, forwardRef } from 'react';
import classNames from 'classnames';
import { Button } from 'stremio/components';
import styles from './Option.less';
import Icon from '@stremio/stremio-icons/react';

type Props = {
    option: MultiselectMenuOption;
    selectedOption?: MultiselectMenuOption | null;
    onSelect: (value: number) => void;
};

const Option = forwardRef<HTMLButtonElement, Props>(({ option, selectedOption, onSelect }, ref) => {
    // consider using option.id === selectedOption?.id instead
    const selected = useMemo(() => option?.value === selectedOption?.value, [option, selectedOption]);

    const handleClick = useCallback(() => {
        onSelect(option.value);
    }, [onSelect, option.value]);

    return (
        <Button
            ref={ref}
            className={classNames(styles['option'], { [styles['selected']]: selected })}
            key={option.id}
            onClick={handleClick}
            aria-selected={selected}
        >
            <div className={styles['label']}>{ option.label }</div>
            {
                selected && !option.level ?
                    <div className={styles['icon']} />
                    : null
            }
            {
                option.level ?
                    <Icon name={'caret-right'} className={styles['option-caret']} />
                    : null
            }
        </Button>
    );
});

Option.displayName = 'Option';

export default Option;
