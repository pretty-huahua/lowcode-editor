import { CommonComponentProps } from '../../interface';
import { useMaterailDrop } from '../../hooks/useMaterialDrop';

function Page({ id, children, styles }: CommonComponentProps) {
  // const { addComponent } = useComponetsStore();
  // const { componentConfig } = useComponentConfigStore();
  // const [{ canDrop }, drop] = useDrop(() => ({
  //   accept: ['Button', 'Container'],
  //   drop: (item: { type: string }, monitor) => {
  //     const didDrop = monitor.didDrop();
  //     console.log('Page', didDrop);

  //     if (didDrop) {
  //       return;
  //     }
  //     const props = componentConfig[item.type].defaultProps;

  //     addComponent(
  //       {
  //         id: new Date().getTime(),
  //         name: item.type,
  //         props,
  //       },
  //       id
  //     );
  //   },
  //   collect: (monitor) => ({
  //     canDrop: monitor.canDrop(),
  //   }),
  // }));
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container'], id);

  return (
    <div
      ref={drop}
      data-component-id={id}
      className="p-[20px] h-[100%] box-border"
      style={{ ...styles, border: canDrop ? '2px solid blue' : 'none' }}
    >
      {children}
    </div>
  );
}

export default Page;
