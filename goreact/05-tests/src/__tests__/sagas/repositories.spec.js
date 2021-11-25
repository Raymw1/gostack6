import { runSaga } from "redux-saga";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];
    apiMock.onGet("/users/Raymw1/repos").reply(200, ["Repos1", "Repos1"]);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getRepositories
    ).toPromise();
    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess(["Repos1", "Repos1"])
    );
  });
});
