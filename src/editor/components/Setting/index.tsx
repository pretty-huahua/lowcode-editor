import { useComponentConfigStore } from '../../stores/component-config';
import { useComponetsStore } from '../../stores/components';

export function Setting() {
  const { components } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();
  return (
    <div>
      <pre>{JSON.stringify(components, null, 2)}</pre>
      <pre className="text-red-600">
        {JSON.stringify(componentConfig, null, 2)}
      </pre>
    </div>
  );
}
