import { useBooleanFieldDisplay } from '@/object-record/record-field/meta-types/hooks/useBooleanFieldDisplay';
import { BooleanDisplay } from '@/ui/field/display/components/BooleanDisplay';

export const BooleanFieldDisplay = () => {
  const { fieldValue } = useBooleanFieldDisplay();

  return <BooleanDisplay value={fieldValue} />;
};
