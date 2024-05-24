import PropertiesDetails from "@/components/propertiesDetails";

const Properties = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const response = await fetch(
    "https://real-estate-ten-nu.vercel.app/api/getSingleProperty",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    },
  );
  const data = await response.json();
  console.log(data);
  return <PropertiesDetails {...data.data} />;
};

export default Properties;
