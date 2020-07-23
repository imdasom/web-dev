import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main01728 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[][] arr = new int[N +1 ][N + 1];
        for (int i = 0; i < N + 1; i++) {
            String[] strs = br.readLine().split(" ");
            for (int j = 0; j < N; j++) {
                arr[i][j] = Integer.parseInt(strs[j]);
            }
        }
        Marble[][] cache = new Marble[N][N];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                Marble marble = new Marble();
                marble.speed = arr[1][i] - arr[0][j];
                marble.i = arr[1][i];
                marble.j = arr[0][j];
                cache[i][j] = marble;
            }
        }

        List<Marble> marbleList = new ArrayList<>();
        if (arr.length < 3) {
            for (int i = 0; i < cache[0].length; i++) {
                marbleList.add(cache[0][i]);
            }
        } else {
            for (int i = 0; i < N; i++) {
                int marble1 = arr[2][i];
                for (int j = 0; j < N; j++) {
                    int marble2 = arr[1][j];
                    int speed = marble1 - marble2;
                    boolean found = false;
                    for (Marble marble : cache[j]) {
                        if (!marble.visit && marble.speed == speed && marble2 - speed == marble.j) {
                            marble.visit = true;
                            marbleList.add(marble);
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        break;
                    }
                }
            }
        }
        marbleList.stream()
                .sorted(Comparator.comparingInt(marble -> marble.j))
                .forEach((marble) -> System.out.println(marble.j + " " + marble.speed));
    }

    static class Marble {
        int i;
        int j;
        int speed;
        boolean visit;
    }

}
