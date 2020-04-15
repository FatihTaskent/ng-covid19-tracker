export default class CountryModel {
    public CountryName: string;
    public FullName: string;
    public CountryCode: string;

    public isSelected: boolean = false;

    public static FromData(data: object) {
        return <CountryModel> {
            CountryName: data["Country"],
            FullName: data["Slug"],
            CountryCode: data["ISO2"]
        }
    }
}