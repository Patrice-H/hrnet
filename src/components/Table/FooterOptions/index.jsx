import TableEntriesIndicator from '../TableEntriesIndicator';
import TablePageNavigator from '../TablePageNavigator';
import './FooterOptions.css';

const FooterOptions = ({
  total,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}) => {
  return (
    <div id="table-footer-options" data-testid="table-footer-options">
      <TableEntriesIndicator total={total} />
      <TablePageNavigator
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};

export default FooterOptions;
