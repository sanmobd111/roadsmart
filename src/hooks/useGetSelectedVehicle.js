import { useSelector } from 'react-redux';

export default function useGetSelectedVehicle() {
    const vehicles = useSelector((state) => state?.vehicle?.vehicles);
    const selectedVehicles = vehicles.filter((vehicle) => vehicle.selected)
    return selectedVehicles
}
