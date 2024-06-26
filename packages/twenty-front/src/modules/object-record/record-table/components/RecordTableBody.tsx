import { useRecoilValue } from 'recoil';

import { RecordTableBodyFetchMoreLoader } from '@/object-record/record-table/components/RecordTableBodyFetchMoreLoader';
import { RecordTableRow } from '@/object-record/record-table/components/RecordTableRow';
import { useRecordTableStates } from '@/object-record/record-table/hooks/internal/useRecordTableStates';
import { DraggableTableBody } from '@/ui/layout/draggable-list/components/DraggableTableBody';

type RecordTableBodyProps = {
  objectNameSingular: string;
  recordTableId: string;
};

export const RecordTableBody = ({
  objectNameSingular,
  recordTableId,
}: RecordTableBodyProps) => {
  const { tableRowIdsState } = useRecordTableStates();

  const tableRowIds = useRecoilValue(tableRowIdsState);

  return (
    <>
      <DraggableTableBody
        objectNameSingular={objectNameSingular}
        recordTableId={recordTableId}
        draggableItems={
          <>
            {tableRowIds.map((recordId, rowIndex) => {
              return (
                <RecordTableRow
                  key={recordId}
                  recordId={recordId}
                  rowIndex={rowIndex}
                />
              );
            })}
          </>
        }
      />
      <RecordTableBodyFetchMoreLoader objectNameSingular={objectNameSingular} />
    </>
  );
};
