import PropTypes from "prop-types";

const StatementCard = ({
  id,
  statementName,
  bankName,
  bankImage,
  onClickHandler,
}) => {
  return (
    <div
      className="min-w-48 p-4 max-w-sm rounded flex items-center justify-between overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={() => onClickHandler(id)}
    >
      <div>
        <img
          className="w-full h-10 object-center object-cover min-w-10"
          src={bankImage}
          alt={bankName}
        />
      </div>
      <div>
        <div className="px-6 ">
          <div className="font-medium text-sm mb-1 whitespace-nowrap ext-ellipsis">
            {bankName}
          </div>
          <div className="font-semibold text-sm mb-2 whitespace-nowrap text-ellipsis ">
            {statementName}
          </div>
        </div>
      </div>
    </div>
  );
};

StatementCard.propTypes = {
  id: PropTypes.string.isRequired,
  statementName: PropTypes.string.isRequired,
  isCreditCard: PropTypes.bool.isRequired,
  bankName: PropTypes.string.isRequired,
  bankImage: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

export default StatementCard;
