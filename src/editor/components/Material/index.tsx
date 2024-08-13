import { useMemo } from 'react';
import { MaterialItem } from '../MaterialItem';
import { useComponentConfigStore } from '../../stores/component-config';

export function Material() {
  const { componentConfig } = useComponentConfigStore();

  const components = useMemo(() => {
    return Object.values(componentConfig).filter(
      (item) => item.name !== 'Page'
    );
  }, [componentConfig]);

  return (
    <div>
      {components.map((item, index) => {
        return (
          <MaterialItem
            desc={item.desc}
            name={item.name}
            key={item.name + index}
          />
        );
      })}
    </div>
  );
}
