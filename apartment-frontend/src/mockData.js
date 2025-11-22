// Mock data for apartments
const mockApartments = [{
        id: 1,
        apartmentName: "Skyline Residency",
        ownerName: "John Doe",
        rent: 25000,
        address: "Bangalore, India",
    },
    {
        id: 2,
        apartmentName: "Green Heights",
        ownerName: "Priya Sharma",
        rent: 30000,
        address: "Chennai, India",
    },
];

// Function to get an apartment by ID
export const getApartmentById = (id) => {
    return mockApartments.find((apartment) => apartment.id === parseInt(id));
};

// Function to update apartment details
export const updateApartment = (id, updatedData) => {
    const index = mockApartments.findIndex((apartment) => apartment.id === parseInt(id));
    if (index !== -1) {
        mockApartments[index] = {...mockApartments[index], ...updatedData };
    }
    return mockApartments[index];
};

export default mockApartments;