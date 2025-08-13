import { useEffect, useState } from "react";

import { Place } from "@/interfaces/place";
import firestore from "@react-native-firebase/firestore";

export const usePlaces = () => {
  const [data, setData] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection("places") // Reemplaza con el nombre de tu colección
      .onSnapshot({
        next: (querySnapshot) => {
          let placesList: Place[] = [];

          querySnapshot.forEach((documentSnapshot) => {
            const data = documentSnapshot.data();

            placesList.push({
              id: documentSnapshot.id,
              ...data,
            } as Place);
          });

          setData(placesList);

          setLoading(false);
        },
        error: (err) => {
          setError(err);
          setLoading(false);
        },
      });

    return () => subscriber();
  }, []);

  return { data, loading, error };
};
