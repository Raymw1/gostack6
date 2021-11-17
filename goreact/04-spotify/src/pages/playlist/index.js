import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://carrefourbr.vtexassets.com/arquivos/ids/7146517/MP28868605_Kit-de-Camisetas-Camisas-Iron-Maiden-Com-2-Pecas-G_3_Zoom.jpg?v=637348691650500000"
        alt="Iron Maiden"
      />
      <div>
        <span>Playlist</span>
        <h1>Rock Forever</h1>
        <p>13 songs</p>
        <button>Play</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duration" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
        <tr>
          <td>
            <div>
              <img src={PlusIcon} alt="Add" />
            </div>
          </td>
          <td>The Trooper</td>
          <td>Iron Maiden</td>
          <td>Snyder</td>
          <td>4:54</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
