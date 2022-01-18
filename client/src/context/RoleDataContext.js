import React from "react";
import { createContext, useState } from "react";

const RoleDataContext = createContext(null);

export const RoleDataContextProvider = ({
	manufacturerRole,
	distributorRole,
	deliveryRole,
	customerRole,
	children,
}) => {
	const [roles, setRoles] = useState({
		manufacturer: manufacturerRole,
		distributor: distributorRole,
		delivery: deliveryRole,
		customer: customerRole,
	});

	return (
		<RoleDataContext.Provider value={{ roles, setRoles }}>
			{children}
		</RoleDataContext.Provider>
	);
};

export const useRole = () => React.useContext(RoleDataContext);
