export class Mapping {

    public static x = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    public static mapPoint(index: number) {
        return Mapping.x[index-1];
    }

}