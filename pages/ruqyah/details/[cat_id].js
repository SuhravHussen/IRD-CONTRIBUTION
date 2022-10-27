import React, { useEffect } from "react";
import RuqyahSubCatApi from "../../../dataStore/api/RuqyahSubCatApi";
import RuqyahDetailsApi from "../../../dataStore/api/RuqyahDetailsApi";
import Master from "../../../components/Layout/Master";

import DuaContainer from "../../../components/Details/DuaContainer";
import RuqyahDetailsCard from "../../../components/Ruqyah/Details/RuqyahDetailsCard";
import CategoryContainer from "../../../components/Ruqyah/Category/CategoryContainer";
import RuqCatApi from "../../../dataStore/api/RuqyahCatApi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import LoadingSkeleton from "../../../components/Ruqyah/Details/LoadingSkeleton";

const MyApp = () => {
  const [haveAllData, setHaveAllData] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [detailsToshow, setDetailsToshow] = React.useState([]);
  const language = useSelector((state) => state.settings.language);
  const ruqyahCat = useSelector((state) => state.ruqyahCat.data);
  const categoryLoading = useSelector((state) => state.ruqyahCat.loading);
  const categoryError = useSelector((state) => state.ruqyahCat.error);
  const subCategories = useSelector((state) => state.ruqyahSubCat.data);
  const subCategoryLoading = useSelector((state) => state.ruqyahSubCat.loading);
  const subCategoryError = useSelector((state) => state.ruqyahSubCat.error);
  const ruqyahDetails = useSelector((state) => state.ruqyahDetails.data);
  const detailsLoading = useSelector((state) => state.ruqyahDetails.loading);
  const detailsError = useSelector((state) => state.ruqyahDetails.error);

  const { cat_id } = useRouter().query;

  useEffect(() => {
    const filteredDetails = ruqyahDetails.filter((detail) => detail.cat_id === Number(cat_id));
    setDetailsToshow(filteredDetails);
  }, [cat_id, ruqyahDetails]);

  useEffect(() => {
    RuqCatApi.getRuqyahCategory(language);
    RuqyahSubCatApi.getRuqyahSubCat(language);
    RuqyahDetailsApi.getRuqyahDetails(language);
  }, [language]);

  useEffect(() => {
    if (ruqyahCat.length > 0 && !categoryLoading && !categoryError && !subCategoryLoading && !subCategoryError && !detailsLoading && !detailsError) {
      setHaveAllData(true);
    } else {
      setHaveAllData(false);
    }
    if (categoryLoading || subCategoryLoading || detailsLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (categoryError || subCategoryError || detailsError) {
      setError(true);
    } else {
      setError(false);
    }
  }, [language, ruqyahCat, categoryLoading, categoryError, subCategories, subCategoryLoading, subCategoryError, detailsLoading, detailsError]);

  return (
    <Master ns={true}>
      {haveAllData && !isLoading && !error && (
        <>
          <CategoryContainer categories={ruqyahCat} subCategories={subCategories} />
          {detailsToshow && (
            <DuaContainer>
              {detailsToshow?.map((item) => (
                <RuqyahDetailsCard key={item.id} details={item} />
              ))}
            </DuaContainer>
          )}
          {!detailsToshow && <p> No Ruqyah available for this category </p>}
        </>
      )}
      {isLoading && !error && <LoadingSkeleton />}
      {error && !isLoading && <p>Something went wrong</p>}
    </Master>
  );
};

export default MyApp;
