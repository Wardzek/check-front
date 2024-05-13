import { CountryType } from "@/components/CountryCard";
import { Layout } from "@/components/Layout";
import { queryCountry } from "@/graphql/queryCountry";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Country(): React.ReactNode {
  const router = useRouter();
  const countryId = router.query.id;

  const { data } = useQuery<{ item: CountryType }>(queryCountry, {
    variables: {
      id: countryId,
    },
    skip: countryId === undefined,
  });
  const country = data ? data.item : null;

  return (
    <Layout title="Country">
      <main className="main-content">
        {country ? (
          <>
            <h2>{country.name}</h2>
            <p>{country.code}</p>
          </>
        ) : countryId ? (
          "Chargement/erreur"
        ) : (
          "Il manque l'id dans l'URL"
        )}
      </main>
    </Layout>
  );
}
