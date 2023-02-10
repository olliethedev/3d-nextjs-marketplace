/* eslint-disable @next/next/no-img-element */
import { selectAccountState, setAccountState } from "@/store/accountSlice";
import { Account } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AccountForm = () => {
  const accountState = useSelector(selectAccountState);
  const dispatch = useDispatch();
  console.log(accountState);

  const [formInputs, setFormInputs] = useState({
    firstName: accountState.firstName,
    lastName: accountState.lastName,
    email: accountState.email,
    billingStatus: accountState.billingStatus,
  });

  const onSave = () => {
    dispatch(
      setAccountState({
        ...accountState,
        ...formInputs,
      })
    );
    alert("Saved");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex space-x-10">
      <ProfileImageSection account={accountState} />
      <div className="grow">
        <FormField
          label="First Name"
          name="firstName"
          value={formInputs.firstName}
          onChange={onChange}
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={formInputs.lastName}
          onChange={onChange}
        />
        <FormField
          label="Email"
          name="email"
          value={formInputs.email}
          onChange={onChange}
        />

        <FormField
          label="Billing Status"
          name="billingStatus"
          value={formInputs.billingStatus}
          onChange={onChange}
        />

        <button className="btn btn-primary" onClick={() => onSave()}>
          Save
        </button>
      </div>
    </div>
  );
};

const ProfileImageSection = ({ account }: { account: Account }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onSave = (value: string) => {
    console.log(value);
    dispatch(
      setAccountState({
        ...account,
        profileImage: value,
      })
    );
    toggleModal();
    alert("Saved");
  };
  return (
    <div className="space-y-3 flex flex-col justify-center">
      <img
        className="rounded-full"
        src={account.profileImage}
        alt={account.firstName}
        width={300}
        height={200}
      />
      <button className="btn btn-primary" onClick={toggleModal}>
        Change Profile Image
      </button>
      {showModal && (
        <ChangeProfileImageModal
          value={account.profileImage}
          onSave={onSave}
          onCancel={toggleModal}
        />
      )}
    </div>
  );
};

const FormField = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex space-x-3 shrink">
      <div className="form-control">
        <h3 className="form-label">{label}:</h3>
        <input
          name={name}
          className="form-input text-lg p-1"
          max={100}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const ChangeProfileImageModal = ({
  value,
  onSave,
  onCancel,
}: {
  value: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}) => {
  const [text, setText] = useState(value);
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="card-content bg-white p-4 rounded">
          <h1 className="title-lg">Change Profile Image</h1>
          <FormField
            label="Picture URL"
            name="profileImage"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <div className="flex space-x-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                onSave(text);
              }}
            >
              Save
            </button>
            <button className="btn btn-ghost" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
