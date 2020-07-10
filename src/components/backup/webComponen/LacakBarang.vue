<template>
    <div>
        <br>
        <hr>
        NO RESI : {{$route.query.resi}}
        <hr>
        <form method="get" action="https://cekresi.com" target="_BLANK">
            <div class="sm-form ">
                <label for="noresi">Your noresi</label>
                <input type="text" id="noresi" name="noresi" class="form-control form-control-sm" placeholder="Masukkan no resi..." :value="$route.query.resi">
            </div>
            <div class="text-center">
                <hr>
                <input type="submit" class="btn btn-sm btn-dark" style="width:200px;" value="cek resi" />
                <hr>
            </div>
            <br />
        </form>

    </div>
</template>
