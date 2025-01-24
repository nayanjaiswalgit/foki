import PropTypes from "prop-types";

const AccountCard = ({
  id,
  accountName,
  bankName,
  bankImage,
  onClickHandler,
}) => {
  return (
    <div
      className="min-w-40 p-2 max-w-sm rounded flex items-center justify-items-start overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={() => onClickHandler(id)}
    >
      <div>
        <img
          className=" object-center object-cover min-w-8"
          src={bankImage}
          alt={bankName}
          width={"8px"}
          height={"8px"}
        />
      </div>
      <div>
        <div className=" pl-6 max-w-40 overflow-hidden text-ellipsis ">
          <div className="font-medium  text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {bankName}
          </div>
          <div className=" font-medium text-xs whitespace-nowrap overflow-hidden text-ellipsis">
            {accountName}
          </div>
        </div>
      </div>
    </div>
  );
};

AccountCard.propTypes = {
  id: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  bankImage: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

export default AccountCard;
