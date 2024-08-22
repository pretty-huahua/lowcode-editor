import { useDrop } from 'react-dnd';
import { getComponentById, useComponetsStore } from '../stores/components';
import { useComponentConfigStore } from '../stores/component-config';

export interface ItemType {
  type: string;
  dragType?: string;
  id: number;
}

export function useMaterailDrop(accept: string[], id: number) {
  const { addComponent, deleteComponent, components } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  const [{ canDrop }, drop] = useDrop(() => ({
    accept,
    drop: (item: ItemType, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      if (item.dragType === 'move') {
        const component = getComponentById(item.id, components);
        deleteComponent(item.id);
        addComponent(component!, id);
      } else {
        const config = componentConfig[item.type];

        addComponent(
          {
            id: new Date().getTime(),
            name: item.type,
            props: config.defaultProps,
            desc: config.desc,
          },
          id
        );
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return { canDrop, drop };
}
