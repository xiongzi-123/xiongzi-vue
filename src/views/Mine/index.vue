<template>
  <div class="page-mine">
    <Header title="登入"></Header>
    <div class="top">
      <div class="center">
        <img
          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/avatar.78577bb7.png"
          alt=""
        />
      </div>
    </div>
    <div class="list1">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="center">墨币充值</div>
      <div class="right">
        <i class="iconfont icon-youjiantou-01"></i>
      </div>
    </div>
    <div class="list1">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="center">墨币充值</div>
      <div class="right">
        <i class="iconfont icon-youjiantou-01"></i>
      </div>
    </div>
    <div class="list1">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="center">墨币充值</div>
      <div class="right">
        <i class="iconfont icon-youjiantou-01"></i>
      </div>
    </div>
    <div class="list1">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="center">墨币充值</div>
      <div class="right">
        <i class="iconfont icon-youjiantou-01"></i>
      </div>
    </div>
    <div class="list1">
      <div class="left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div class="center">墨币充值</div>
      <div class="right">
        <i class="iconfont icon-youjiantou-01"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'Mine',
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-mine {
  height: 100%;
  .top {
    height: 224px;
    padding: 68px 40px 0;
    border: 1px solid #cccccc;
    // margin-left: 95px;
    .center {
      width: 88px;
      height: 88px;
      margin-left: 95px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .list1 {
    @include border-bottom;
    height: 54px;
    padding: 0 0 0 16px;
    display: flex;
    align-items: center;
    .left {
      width: 32px;
      margin-right: 5px;
      height: 32px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .center {
      color: #666;
      font-size: 14px;
      width: 275px;
    }
    .right {
      width: 44px;
      height: 44px;
    }
  }
}
</style>
